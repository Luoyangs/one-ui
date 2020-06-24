## Input

### Input props
| Property | Description | Type | Accepted Values | Default |
|:--|:--|:--|:--|:--|
| type | the type of input | String | native type and `textarea` / `text` / `password` | `text` |
| value | the value of input | String | - | - |
| placeholder | the placeholder of input | String | - | - |
| autocomplete | the native autocomplete | Boolean | - | - |
| form | the native form | Boolean | - | - |
| maxLength | the native max length | Number | - | - |
| size | the size of input | String | ~~`x-large`~~/`large`/`normal`/`small` | `normal` |
| suffix-label | the suffix label of input | String | - | - |
| prefix-label | the prefix label of input | String | - | - |
| prefix-icon | the prefix icon, accepts svg | String | - | - |
| suffix-icon | the suffix icon, accepts svg | String | - | - |
| disabled | whether the input is disabled | Boolean | - | `false` |
| clearable | whether the input in clearable | Boolean | - | `false` |
| rows | the native rows of textarea | Number | - | - |
| minrows | the min rows of textarea | Number | - | - |
| maxrows | the max rows of textarea | Number | - | - |
| autosize | whether the textarea will auto adjust its size | Boolean | - | `false` |
| show-word-limit | whether show word limit | Boolean | - | `false` |

### Input slot
All input slots and following
| Slot | Description  |
|:--|:--|
| prefix | the prefix label of input |
| suffix | the suffix label of input |
| help | the help message of input |


### Input events
All native input events and following
| Event | Description | Parameters |
|:--|:--|:--|
| value-change | the change event of input value | the value |
