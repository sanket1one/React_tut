import * as React from 'react'
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import './Mde_tut.css'

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
});

function Mde_tut() {
    const [value, setValue] = React.useState("**Hello world!!!**");
    const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">("write");
    return (
      <div className="container">
        <h1>Hello world</h1>
        <ReactMde
          value={value}
          onChange={setValue}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
          generateMarkdownPreview={markdown =>
            Promise.resolve(converter.makeHtml(markdown))
          }
        />
      </div>
      )
}

export default Mde_tut
