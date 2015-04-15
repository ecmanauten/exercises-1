Template strings are enclosed by the back-tick (\` \`) (grave accent) character instead of double or single quotes. Template strings can contain place holders. These are indicated by the Dollar sign and curly braces (`${expression}`). The expressions in the place holders and the text between them get passed to a function. The default function just concatenates the parts into a single string. If there is an expression preceding the template string (tag here),  the template string is called "tagged template string". In that case, the tag expression (usually a function) gets called with the processed template string, which you can then manipulate before outputting.

_[Template Strings](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings) by Mozilla Contributors is licensed under [CC-BY-SA 2.5](http://creativecommons.org/licenses/by-sa/2.5/)._

\-\-\-

123