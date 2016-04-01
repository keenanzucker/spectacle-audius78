// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  component: require("../assets/component.jpg"),
  ui1: require("../assets/ui1.jpg"),
  ui2: require("../assets/ui2.jpg"),
  diagram: require("../assets/diagram.jpg"),
  wave: require("../assets/wave.png")
};

preloader(images);

const theme = createTheme({
  primary: "#0097A7"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "fade"]} transitionDuration={500}>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Audius78
            </Heading>
            <Heading size={1} fit caps>
              A Collaborative Audio Editing Experience
            </Heading>
            <Heading size={1} fit caps textColor="black">
              Byron, Hieu, Keenan, & Patrick
            </Heading>
            <Link href="https://github.com/phuston/audius78">
              <Text bold caps textColor="tertiary">View on Github</Text>
            </Link>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading caps fit size={2} textColor="primary">
              Our Project
            </Heading>
            <Markdown>
              {`
###### We are aiming to build the world’s first cloud-based collaborative audio editor.
______
This entails a system where users can upload audio files, and then edit them together in ways like cutting, splicing, moving, as well as adding effects like fading and filtering. 
              `}
            </Markdown>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading caps fit size={2} textColor="black">
              Technologies
            </Heading>
            <Markdown>
              {`
* React with Redux
* Sockets
* Node & Express
* S3
* Webpack
* Custom WAVE parser thing
              `}
            </Markdown>
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary">
            <Heading caps fit size={2} textColor="black">
              Current Progress
            </Heading>
            <Markdown>
              {`
* Designed UI
* Set up webpack configuration
* Wrote .wav parser
* Learned Redux and structure architecture 
* Figured out our client-to-server interactions
* Investigated audio visualization on front-end
              `}
            </Markdown>
          </Slide>

          <Slide transition={["spin", "zoom"]} bgColor="primary">
            <Image width="100%" src={images.component}/>
          </Slide>


          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              User Interface
            </Heading>
          </Slide>

          <Slide transition={[ "zoom"]} bgColor="primary">
            <Image width="100%" src={images.ui1}/>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Image width="100%" src={images.ui2}/>
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Markdown>
              {`
#### Workflow
* Start a new workspace
* Upload a file (.wav, .mp3, etc.) to the server
* Client downloads .wav and displays it
* Operations are sent via the socket & applied locally
* All other clients in the network receive operation & update their files accordingly
* Server updates its locally cached files in order to remain synced with clients.
* Join an existing workspace
* Get .wav files from Amazon S3 instance given to client via socket by server
              `}
            </Markdown>
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Storage of State
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/state.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              WAVE Files
            </Heading>
            <Image width="100%" src={images.wave}/>
          </Slide>

          <Slide transition={[ "zoom"]} bgColor="primary">
            <Image width="100%" src={images.diagram}/>
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary">
            <Markdown>
              {`
## Side-Project Audio Editor

* Handles both Node IO and Client-side IO
* Deals only with WAVE files
* Handles different operations using filters, including for our MVP
1. Splitting a file
2. Combining multiple files

##### Current state:
* Parsing WAVE files on Server-side
* Splitting WAVE files on Server-side
              `}
            </Markdown>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Our questions for you!
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Best way to save data on client side? e.g WAV files (~10mb per minute)
</ListItem></Appear>
              <Appear><ListItem>Does our architecture make sense? What improvements can we make?
</ListItem></Appear>
              <Appear><ListItem>Should we represent everything as text and do traditional OT?
</ListItem></Appear>
              <Appear><ListItem>Suggestions on client vs server side operations?
</ListItem></Appear>
              <Appear><ListItem>Suggestions of libraries or sources that can help us? 
</ListItem></Appear>
            </List>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
