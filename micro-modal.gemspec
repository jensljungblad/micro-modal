$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "micro-modal/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name          = "micro-modal"
  s.version       = MicroModal::VERSION
  s.authors       = ["Jens Ljungblad"]
  s.email         = ["jens.ljungblad@gmail.com"]
  s.description   = "A description"
  s.summary       = "A summary"
  s.homepage      = ""
  s.license       = "MIT"

  s.files         = `git ls-files`.split($/)
  s.executables   = s.files.grep(%r{^bin/}) { |f| File.basename(f) }
  s.test_files    = s.files.grep(%r{^(test|s|features)/})
  s.require_paths = ["lib"]

  s.add_dependency "railties", "> 3.1"

  s.add_development_dependency "bundler", "~> 1.3"
  s.add_development_dependency "rake"
end
