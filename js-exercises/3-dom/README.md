# DOM

Implement a drum kit that plays the given sounds when the corresponding key is pressed following these steps:

* Listen for the [`keydown`](https://developer.mozilla.org/en-US/docs/Web/Events/keydown) event on the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) object
* Play the corresponding audio file when the pressed key matches a DOM [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement) element. The [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement) element has a `play()` method. Read also about [`data-`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset) attributes.
* You need to rewind the audio file before playing it
* Apply the `playing` CSS class to the DOM element that represents the instrument when the key has been pressed
* Remove the `playing` CSS class when the CSS transition has ended. You need to listen for the [`transitionend`](https://developer.mozilla.org/en-US/docs/Web/Events/transitionend) event.

## Credits

This exercise is part of the [JavaScript30](https://javascript30.com/) coding challenge.
