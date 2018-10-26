//@flow

import React from 'react';
import elementResizeDetectorMaker from 'element-resize-detector';

type Size = {
    height: ?number,
    width: ?number,
};

type Props = {
    /** Function responsible for rendering children.*/
    children: Size => React.Element<*>,

    /** Optional custom CSS class name to attach to root AutoSizer element.  */
    className?: string,

    /** Default height to use for initial render; useful for SSR */
    defaultHeight?: number,

    /** Default width to use for initial render; useful for SSR */
    defaultWidth?: number,

    /** Disable dynamic :height property */
    disableHeight: boolean,

    /** Disable dynamic :width property */
    disableWidth: boolean,

    /** Nonce of the inlined stylesheet for Content Security Policy */
    nonce?: string,

    /** Callback to be invoked on-resize */
    onResize: Size => void,

    /** Optional inline style */
    style: ?Object,
};

type ResizeHandler = (element: HTMLElement, onResize: (element: HTMLElement) => void) => void;

type DetectElementResize = {
    listenTo: ResizeHandler,
    removeListener: ResizeHandler,
};

type State = {
    height: number,
    width: number,
};

class SizeMe extends React.Component<Props, State> {
    static defaultProps = {
        disableHeight: false,
        disableWidth: false,
        onResize: () => {},
        style: {},
    };

    _root: ?HTMLElement;
    _parentNode: HTMLElement;
    _elementResizeDetector: DetectElementResize;

    state = {
        width: this.props.defaultHeight || 0,
        height: this.props.defaultHeight || 0,
    };

    _handleResize = (element: HTMLElement) => {
        this.setState({
            width: element.clientWidth,
            height: element.clientHeight,
        });
    };

    componentDidMount() {
        if (
            this._root &&
            this._root.parentNode &&
            this._root.parentNode instanceof this._root.parentNode.ownerDocument.defaultView.HTMLElement
        ) {
            this._parentNode = this._root.parentNode;

            this._parentNode.style.overflow = 'hidden';

            this._elementResizeDetector = elementResizeDetectorMaker({
                strategy: 'scroll',
            });

            this._elementResizeDetector.listenTo(this._parentNode, this._handleResize);

            this._handleResize(this._parentNode);
        }
    }

    componentWillUnmount() {
        if (this._elementResizeDetector && this._parentNode) {
            this._elementResizeDetector.removeListener(this._parentNode, this._handleResize);
        }
    }

    _renderContent() {
        const { children, disableHeight, disableWidth, onResize } = this.props;
        const { width, height } = this.state;

        if (typeof children === 'function') {
            const params = {};
            if (!disableHeight) {
                params.height = height;
            }
            if (!disableWidth) {
                params.width = width;
            }

            onResize(params);

            return children(params);
        }
    }

    render() {
        const { style, className } = this.props;

        return (
            <div {...{ style, className }} ref={i => (this._root = i)}>
                {this._renderContent()}
            </div>
        );
    }
}

export default SizeMe;
