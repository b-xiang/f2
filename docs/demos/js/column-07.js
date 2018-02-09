(() => {
const data = [
      { x: '分类一', y: [ 76, 100 ] },
      { x: '分类二', y: [ 56, 108 ] },
      { x: '分类三', y: [ 38, 129 ] },
      { x: '分类四', y: [ 58, 155 ] },
      { x: '分类五', y: [ 45, 120 ] },
      { x: '分类六', y: [ 23, 99 ] },
      { x: '分类七', y: [ 18, 56 ] },
      { x: '分类八', y: [ 18, 34 ] },
    ];
    const chart = new F2.Chart({
      id: 'column7',
      pixelRatio: window.devicePixelRatio,
      width: window.innerWidth,
      height: window.innerWidth * 0.64
    });
    chart.source(data, {
      y: {
        tickCount: 5
      }
    });
    chart.tooltip({
      showItemMarker: false,
      onShow(ev) {
        const { items } = ev;
        items[0].name = '范围';
        const value = items[0].value;
        items[0].value = value[0] + ' 至 ' + value[1];
      }
    });
    chart.interval().position('x*y');
    chart.render();
})();
