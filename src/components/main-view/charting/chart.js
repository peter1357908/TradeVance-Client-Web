// DISCLAIMER: this component is currently using a widget from TradingView to display
// an interactive chart just as a placeholder! The final product will not rely on any
// external widgets.
import React, { Component } from 'react';
import { connect } from 'react-redux';

import TradingViewWidget from 'react-tradingview-widget';

import cssVariables from '../../../style.scss';

function mapStateToProps(reduxState) {
  return {
    tabs: reduxState.mainView.chartingTabs,
    activeIndex: reduxState.mainView.activeChartingTabIndex,
  };
}

class Chart extends Component {
  styles = {
    noTabNotificationContainer: {
      width: '100%',
      height: '100%',

      color: cssVariables.tvPurple,
      fontWeight: 'bold',
      fontSize: cssVariables.largeFontSize,
    },
  };

  render() {
    if (this.props.activeIndex < 0) {
      return (
        <div className="center-the-only-item-inside" style={this.styles.noTabNotificationContainer}>
          Search a symbol to get started!
        </div>
      );
    }

    const activeSymbol = this.props.tabs[this.props.activeIndex].symbol;
    return (
      <TradingViewWidget
        symbol={activeSymbol}
        autosize
        hide_top_toolbar
        withdateranges
        timezone="exchange"
      />
    );
  }
}

export default connect(mapStateToProps, null)(Chart);
