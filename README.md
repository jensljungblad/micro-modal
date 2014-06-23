# MicroModal

TODO: Write a gem description

## Installation

Add this line to your application's Gemfile:

    gem 'micro_modal'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install micro_modal

## Usage

Given the following markup:

```html
<div id="my-modal" class="modal">
  <div class="modal-dialog">
    Some content
  </div>
</div>
```

The modal can be initialized using:

```javascript
$myModal = $('#my-modal');
$myModal.modal({
  backdrop: true, // Toggles backdrop visibility
  vertical: true  // Toggles vertical centering
});
```

Then opened using:

```javascript
$myModal.modal('open');
```

And closed using:

```javascript
$myModal.modal('close');
```

The modal comes with very little styling by default. In order to create a responsive modal with padding, try the following:

```sass
@import "micro-modal";

.modal-dialog {
  padding: 1em;

  @media (min-width: 768px) {
    width: 80%;
    max-height: 80%;
  }
  
  @media (min-width: 992px) {
    width: 60%;
    max-height: 60%;
  }
}
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
