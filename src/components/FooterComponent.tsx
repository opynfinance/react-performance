import React, { useEffect, useState } from 'react'
import { useApp } from '../context';

let renderCount = 0;

const FooterComponent: React.FC = () => {
  renderCount += 1

  return (
    <div>
      Footer component rendered {renderCount} times
    </div>
  )
}

export default FooterComponent