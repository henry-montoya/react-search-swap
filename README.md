# React-Search-Swap

A simple tool that makes jsx within your React component searchable, stylable, and swappable.

Demo here: https://codesandbox.io/embed/search-swap-demo-drbln?fontsize=14

Useful for:

- Searching for any string or number in your component
- Applying custom styles to any matches found
- Swapping matches with any other custom string or number

## Installation

```bash
$ npm install react-search-swap
```

or

```bash
$ yarn add react-search-swap
```

Import in your project:

```javascript
import SearchSwap from "react-search-swap";
```

## Usage

Wrap the SearchSwap component around any or all JSX within your component and provide it with a string or number to find within your component. SearchSwap rebuilds your JSX tree and places any matches within a span that can be styled to your liking. Optionally, you can also swap matches with a custom string or number of your choice.

### Basic Usage

```jsx
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      term: "My",
      swap: "Your"
  }
  render () {
    return (
        <div>
          <SearchSwap
            term={this.state.term}
            swap={this.state.swap}
            styles={{background: "yellow", color: "red"}}
           >
            <h1 style={{ fontWeight: "bold" }}>
                Welcome
            </h1>
            <div>
                To
            </div>
            <h2>
                My Page!
            </h2>
          </SearchSwap>
        </div>
    )
  }
}
```

## Options

| Option |     Type      | Description                                             |
| :----- | :-----------: | :------------------------------------------------------ |
| term   | string/number | what you'd like to search for within your component     |
| swap   | string/number | what you'd like to render in place of any matches found |
| styles |    object     | styles you'd like applied to any matches                |

```

```
