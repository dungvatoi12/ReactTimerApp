var React = require('react');
var ReactDOM = require('react-dom');

var expect = require('expect');
var $ = require('jQuery');

var TestUtils = require('react-addons-test-utils');


var Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exists', () => {
        expect(Countdown).toExist();
    })

    describe('handleSetCountdown', () => {
        it('should set state to started and countdonw', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(() => {
                 expect(countdown.state.count).toBe(9);
                 done();
            }, 1001)
        });

        it('should count equal to zero', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(1);

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001);
        });

        it('should pause countdown on paused status', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(3);

            countdown.handleStatusChange('paused');

            setTimeout(() => {
                expect(countdown.state.count).toBe(3);
                expect(countdown.state.countdownStatus).toBe('paused');
                done();
            },2001)
        });

        it('should stop countdown on stopped status', () => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('stopped');

            setTimeout(function() {
                expect(countdown.state.count).toBe(0);
                expect(countdown.state.countdownStatus).toBe('stopped');
            }, 3001);
        })

    })
})