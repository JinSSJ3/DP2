import React  from 'react';

export function itemRender(current, type, originalElement) {
    if (type === "prev") {
      return <a href="#0">Previous</a>;
    }
    if (type === "next") {
      return <a href="#0">Next</a>;
    }
    return originalElement;
  }
  
  export function onShowSizeChange(current, pageSize) {
   
  }