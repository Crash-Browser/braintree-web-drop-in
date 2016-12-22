'use strict';

var fake = require('../../../helpers/fake');
var isGuestCheckout = require('../../../../src/lib/is-guest-checkout');

describe('isGuestCheckout', function () {
  it('returns true when given a tokenization key', function () {
    var auth = fake.tokenizationKey;

    expect(isGuestCheckout(auth)).to.be.true;
  });

  it('returns true when given a client token without a customer ID', function () {
    var auth = fake.clientToken;

    expect(isGuestCheckout(auth)).to.be.true;
  });

  it('returns false when given a client token with a customer ID', function () {
    var auth = fake.clientTokenWithCustomerID;

    expect(isGuestCheckout(auth)).to.be.false;
  });
});
