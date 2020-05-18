import React from "react";
import {
  CellMeasurer,
  CellMeasurerCache,
  AutoSizer,
  WindowScroller,
  Masonry
} from "react-virtualized";
import createCellPositioner from "./createCellPositioner";
import PropTypes from "prop-types";
import GiftCard from './GiftCard';

class OverviewList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columnWidth: 300,
      height: 300,
      gutterSize: 10
    };

    this._cache = new CellMeasurerCache({
      defaultHeight: 250,
      defaultWidth: 200,
      fixedWidth: true
    });

    this._onResize = this._onResize.bind(this);
    this._cellRenderer = this._cellRenderer.bind(this);
    this._setMasonryRef = this._setMasonryRef.bind(this);
    this._calculateColumnCount = this._calculateColumnCount.bind(this);
    this._resetCellPositioner = this._resetCellPositioner.bind(this);
  }

  _calculateColumnCount() {
    const { columnWidth, gutterSize } = this.state;

    this._columnCount = Math.floor(this._width / (columnWidth + gutterSize));
  }

  _cellRenderer({ index, key, parent, style })   {
    
    const items = this.props.items;

    const { columnWidth } = this.state;

    const datum = items[index % items.length];
    return (
      <CellMeasurer cache={this._cache} index={index} key={key} parent={parent}>
        <div
          className={"cell"}
          style={{
            ...style,
            width: columnWidth
          }}
        >
          <div
            style={{
              height: datum.length > 0 ? datum.size * 3 : '30%' ,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
           <GiftCard giftCard={datum} userEmail="test@test.com" />
          </div>
        </div>
      </CellMeasurer>
    );
  }

  static contextTypes = {
    customElement: PropTypes.any
  };

  _setMasonryRef(ref) {
    this._masonry = ref;
  }

  _onResize({ width }) {
    this._width = width;

    this._calculateColumnCount();
    this._resetCellPositioner();
    this._masonry.recomputeCellPositions();
  }

  _initCellPositioner() {
    if (typeof this._cellPositioner === "undefined") {
      const { columnWidth, gutterSize } = this.state;

      this._cellPositioner = createCellPositioner({
        cellMeasurerCache: this._cache,
        columnCount: this._columnCount,
        columnWidth,
        spacer: gutterSize
      });
    }
  }

  _resetCellPositioner() {
    const { columnWidth, gutterSize } = this.state;

    this._cellPositioner.reset({
      columnCount: this._columnCount,
      columnWidth,
      spacer: gutterSize
    });
  }

  render() {
    const { items } = this.props;
    this._initCellPositioner();

    return (
      <WindowScroller scrollElement={this.context.customElement}>
        {({ height, scrollTop }) => (
          <AutoSizer
            disableHeight
            height={height}
            onResize={this._onResize}
            overscanByPixels={0}
            scrollTop={scrollTop}
          >
            {({ width }) => (
              <Masonry
                autoHeight
                cellCount={items.length}
                cellMeasurerCache={this._cache}
                cellPositioner={this._cellPositioner}
                cellRenderer={this._cellRenderer}
                height={height}
                overscanByPixels={0}
                ref={this._setMasonryRef}
                scrollTop={scrollTop}
                width={width}
              />
            )}
          </AutoSizer>
        )}
      </WindowScroller>
    );
  }
}

export default OverviewList;
