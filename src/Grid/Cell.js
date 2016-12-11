import type { CommonProps } from '../CommonTypes';

import React from 'react';
import classnames from 'classnames';
import styles from './style';

type CellProps = {
  ratio?: number | string;
  align?: 'top' | 'bottom' | 'center';
  offset?: number | string;
};

const Cell = (props: CommonProps & CellProps) => {
  const buildedStyle = {};

  if (props.ratio) {
    buildedStyle.width = `${100 * props.ratio}%`;
    buildedStyle.flex = 'none';
  }

  if (props.offset) {
    const per = `${100 * props.offset}%`;
    buildedStyle.flex = per;
    buildedStyle.marginLeft = per;
  }

  if (props.textAlign === 'left') buildedStyle.textAlign = 'left';
  if (props.textAlign === 'center') buildedStyle.textAlign = 'center';
  if (props.textAlign === 'right') buildedStyle.textAlign = 'right';

  Object.assign(
    buildedStyle,
    styles.cellAlign[props.align],
    (props.margin && !props.offset ? { margin: props.margin } : {})
  );

  const style = Object.assign({}, styles.cell, buildedStyle, props.style);

  const className = classnames(
    'scuba-cell',
    (props.offset ? 'scuba-cell-offset' : undefined),
    props.className
  );

  return (
    <div
      className={className}
      style={style}
    >
      {props.children}
    </div>
  );
};

Cell.defaultProps = {
  align    : 'top',
  textAlign: 'center'
};

export default Cell;