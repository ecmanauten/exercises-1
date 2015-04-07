/**
 * Copyright 2015, Sergey Surganov
 * All rights reserved.
 */

'use strict';

import React from 'react';
import { includes } from 'lodash';
import * as widgets from 'widgets/widgets';

let tags = [ 'a','abbr','address','area','article','aside','audio','b','base','bdi','bdo','big','blockquote','body','br','button','canvas','caption','cite','code','col','colgroup','data','datalist','dd','del','details','dfn','dialog','div','dl','dt','em','embed','fieldset','figcaption','figure','footer','form','h1','h2','h3','h4','h5','h6','head','header','hr','html','i','iframe','img','input','ins','kbd','keygen','label','legend','li','link','main','map','mark','menu','menuitem','meta','meter','nav','noscript','object','ol','optgroup','option','output','p','param','picture','pre','progress','q','rp','rt','ruby','s','samp','script','section','select','small','source','span','strong','style','sub','summary','sup','table','tbody','td','textarea','tfoot','th','thead','time','title','tr','track','u','ul','var','video','wbr' ];


export default function reactify(tree) {
  if (typeof tree === 'string') {
    return tree;
  } else {
    return tree.map(function(item, i) {
      if (typeof item === 'string') {
        return item;
      } else {
        let type = includes(tags, item.type) ? item.type : widgets[item.type];
        let props = item.props || null;
        let children = item.children ? reactify(item.children) : null;

        return React.createElement(type, {key: i, ...props}, children);
      };
    });
  };
}
