# react-quick-timeline

A simple, customizable &amp; quick timeline UI component for reactjs applications.

## Installation

<br />

```sh
npm i react-quick-timeline
```

<br />

## Basic Usage

<br />

```javascript
import { QuickTimeline } from "react-quick-timeline";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <QuickTimeline timelineBlocks={data} />
    </div>
  );
}
```

### The most basic form of usage:

**\<QuickTimeline>** : The main component that will be used to create timeline in the UI.

**timelineBlocks** : The required _prop_ that creates the timeline blocks containing the content. This prop takes in an array as the data. If not provided timeline will not be rendered.

Below is the base format of the array:

```json
[
  {
    "title": "Title 1",
    "content": "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
    "date": "26th Feb"
  },
  {
    "title": "Title 2",
    "content": "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
    "date": "26th Feb"
  },
  {
    "title": "Title 3",
    "content": "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
    "date": "26th Feb"
  },
  {
    "title": "Title 4",
    "content": "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
    "date": "26th Feb"
  }
]
```

<br />

| Attribute | Description                                     |
| --------- | ----------------------------------------------- |
| title     | defines title of the timeline block             |
| content   | defines the actual content/details of the block |
| date      | defines the date of the block                   |

<br />
<br />

> _Each object in the array defines individual timeline block. The number of elements totally depends as per your requirement, there is no limit to number of object for timeline blocks_

> _with just the above basic config the below timeline is rendered in the UI_

<br />

![Basic timeline](timeline_screenshot.JPG "Basic Timeline")

<br />

## Advance Usage:

### Generic Customizations:

The timeline component is very much customizable to your specific need and you can perform the below customizations:

1. Header caption
   - Add a header caption
   - Change text color
   - Change font to bold or italics
2. Title of timeline blocks
   - Change background/text color
   - Change text alignment
   - Change font to bold or italics
3. Content/details of timeline blocks
   - Change background/text color
   - Change text alignment
   - Change font to bold or italics
4. Change blocks border's round size
5. Date
   - Change text color
   - Change font to bold or italics
6. Change color of timeline's vertical line
7. Time circles
   - Change background color
   - Change border color
   - Hide border
8. Footer caption
   - Add a footer caption
   - Change text color
   - Change font to bold or italics

<br />

> ### Header Caption

<br />

#### Add a header caption

```javascript
import { QuickTimeline } from "react-quick-timeline";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <QuickTimeline timelineBlocks={data} headerCaption="My Timeline Header" />
    </div>
  );
}
```

<br />

#### Change text color

<br />

```javascript
import { QuickTimeline } from "react-quick-timeline";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <QuickTimeline
        timelineBlocks={data}
        headerCaption="My Timeline Header"
        headerCaptionColor="blue"
      />
    </div>
  );
}
```

<br />

#### Change font to bold or italics

<br />

```javascript
import { QuickTimeline } from "react-quick-timeline";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <QuickTimeline
        timelineBlocks={data}
        headerCaption="My Timeline Header"
        headerCaptionColor="blue"
        headerIsBold={true}
        headerIsItalic={true}
      />
    </div>
  );
}
```

<br />

> ### Title of timeline blocks

#### Change background or text color of title

<br />

```javascript
import { QuickTimeline } from "react-quick-timeline";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <QuickTimeline
        timelineBlocks={data}
        titleBgColor="green"
        titleTextColor="white"
      />
    </div>
  );
}
```

<br />

#### Change title text alignment

<br />

```javascript
import { QuickTimeline } from "react-quick-timeline";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <QuickTimeline
        timelineBlocks={data}
        titleBgColor="green"
        titleTextColor="white"
        titleTextAlign="center"
      />
    </div>
  );
}
```

<br />

#### Change font to bold or italics

<br />

```javascript
import { QuickTimeline } from "react-quick-timeline";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <QuickTimeline
        timelineBlocks={data}
        titleBgColor="green"
        titleTextColor="white"
        titleTextAlign="center"
        titleIsBold={true}
        titleIsItalic={true}
      />
    </div>
  );
}
```

<br />

> ### Content/details of timeline blocks

#### Change background or text color of content

<br />

```javascript
import { QuickTimeline } from "react-quick-timeline";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <QuickTimeline
        timelineBlocks={data}
        contentBgColor="green"
        contentTextColor="white"
      />
    </div>
  );
}
```

<br />

#### Change title text alignment

<br />

```javascript
import { QuickTimeline } from "react-quick-timeline";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <QuickTimeline
        timelineBlocks={data}
        contentBgColor="green"
        contentTextColor="white"
        contentTextAlign="center"
      />
    </div>
  );
}
```

<br />

#### Change font to bold or italics

<br />

```javascript
import { QuickTimeline } from "react-quick-timeline";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <QuickTimeline
        timelineBlocks={data}
        contentBgColor="green"
        contentTextColor="white"
        contentTextAlign="center"
        contentIsBold={true}
        contentIsBold={true}
      />
    </div>
  );
}
```

<br />

> ### Change blocks border's round size

<br />

```javascript
import { QuickTimeline } from "react-quick-timeline";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <QuickTimeline
        timelineBlocks={data}
        borderRoundSize=5
      />
    </div>
  );
}
```

<br />

> ### Date

#### Change text color

<br />

```javascript
import { QuickTimeline } from "react-quick-timeline";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <QuickTimeline timelineBlocks={data} dateColor="gray" />
    </div>
  );
}
```

<br />

#### Change font to bold or italics

<br />

```javascript
import { QuickTimeline } from "react-quick-timeline";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <QuickTimeline
        timelineBlocks={data}
        dateColor="gray"
        dateIsBold={true}
        dateIsItalic={true}
      />
    </div>
  );
}
```

<br />

> ### Change color of timeline's vertical line

<br />

```javascript
import { QuickTimeline } from "react-quick-timeline";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <QuickTimeline timelineBlocks={data} timelineLineColor="red" />
    </div>
  );
}
```

<br />

> ### Time circles

#### change background color

<br />

```javascript
import { QuickTimeline } from "react-quick-timeline";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <QuickTimeline timelineBlocks={data} circleBgColor={red} />
    </div>
  );
}
```

<br />

#### change background color

<br />

```javascript
import { QuickTimeline } from "react-quick-timeline";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <QuickTimeline timelineBlocks={data} circleBgColor={red} />
    </div>
  );
}
```

<br />

#### Change border color

<br />

```javascript
import { QuickTimeline } from "react-quick-timeline";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <QuickTimeline
        timelineBlocks={data}
        circleBgColor="red"
        circleBorderColor="black"
      />
    </div>
  );
}
```

<br />

#### Hide border

<br />

```javascript
import { QuickTimeline } from "react-quick-timeline";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <QuickTimeline
        timelineBlocks={data}
        circleBgColor="red"
        circleBorderHide={true}
      />
    </div>
  );
}
```

<br />

> ### Footer Caption

<br />

```javascript
import { QuickTimeline } from "react-quick-timeline";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <QuickTimeline timelineBlocks={data} footerCaption="My Timeline Footer" />
    </div>
  );
}
```

<br />

#### Change footer caption color

<br />

```javascript
import { QuickTimeline } from "react-quick-timeline";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <QuickTimeline
        timelineBlocks={data}
        footerCaption="My Timeline Header"
        footerCaptionColor="blue"
      />
    </div>
  );
}
```

<br />

#### Change font to bold or italics

<br />

```javascript
import { QuickTimeline } from "react-quick-timeline";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <QuickTimeline
        timelineBlocks={data}
        footerCaption="My Timeline Header"
        footerCaptionColor="blue"
        footerIsBold={true}
        footerIsItalic={true}
      />
    </div>
  );
}
```
