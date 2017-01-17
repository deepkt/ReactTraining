import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from '../src/js/components/Home';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(shallow(<App />).contains(<h1 className='app-title'>React JS with Grunt - Training</h1>)).to.equal(true);
  });
});
