# Music Markup Web Components

Music Markup Web Components are built using [StencilJS](https://stenciljs.com) and distributed as web components (currently not using Shadow DOM);

The idea behind it is to provide some general markup for creating music instruments and visualisations using web components.

Currently there are three components:

## `<mm-context>`

This is the top level tag to use to create the audio context. You can provide an `alternative-context` if you want to provide your own `AudioContext`, otherwise it will create a shared one for the application

## `<mm-keyboard>`

The `<mm-keyboard>` tag provides an audio context for creating a keyboard element. It takes one property at the moment `oscillator-type`, which can be one of `sine, square, sawsawtooth or triangle`.  Inside you attach via the slot

## `<mm-key>`

The `<mm-key>` tag is used to add a key to the keyboard.  You can provide it a `frequency` and `time` for the note, and you can also pass a `class-name` property to pass down custom classes.

In the current example it's used like this

```html
<mm-context>
  <mm-keyboard oscillator-type="sawtooth">
    <mm-key class-name="white b" frequency="174.614" time="1"></mm-key>
    <mm-key class-name="black as" frequency="184.997" time="1"></mm-key>
    <mm-key class-name="white a" frequency="195.998" time="1"></mm-key>
    <mm-key class-name="black gs" frequency="200.000" time="1"></mm-key>
    <mm-key class-name="white g" frequency="207.652" time="1"></mm-key>
    <mm-key class-name="black fs" frequency="233.082" time="1"></mm-key>
    <mm-key class-name="white f" frequency="246.942" time="1"></mm-key>
    <mm-key class-name="white e" frequency="261.626" time="1"></mm-key> <!-- Middle c -->
    <mm-key class-name="black ds" frequency="277.183" time="1"></mm-key>
    <mm-key class-name="white d" frequency="293.665" time="1"></mm-key>
    <mm-key class-name="black cs" frequency="311.127" time="1"></mm-key>
    <mm-key class-name="white c" frequency="329.628" time="1"></mm-key>
  </mm-keyboard>
</mm-context>
```

Future features include:

- [ ] Adding support for MP3 Audio / WAV files
- [ ] Provide theme support (Design different skins)
- [ ] Add a visualiser for control
- [ ] Support nested tags that provide node pass throughs

## Getting Started

To start a new project mm-components uses the Stencil starter

```bash
git clone https://github.com/tanepiper/mm-components.git mm-components
cd mm-components
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To view the build, start an HTTP server inside of the `/www` directory.

To watch for file changes during development, run:

```bash
npm run dev
```

To build the app for production, run:

```bash
npm run build
```

To run the unit tests once, run:

```
npm test
```

To run the unit tests and watch for file changes during development, run:

```
npm run test.watch
```
