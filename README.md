### Frontend Development

#### Resources used

- [How to setup an Angular project](https://angular.io/guide/setup-local)
- [What is a Subscription](https://rxjs.dev/guide/subscription)
- [How to remove focus border in a button](https://stackoverflow.com/questions/3397113/how-to-remove-focus-border-outline-around-text-input-boxes-chrome)
- [Request Cancellations in Angular](https://www.angularaddicts.com/p/unlock-the-power-of-http-request-cancellation)
- [Material components docs](https://material.angular.io/components/categories)
- [How to start a zone-less Angular app](https://medium.com/@kamil.galek/mythical-angular-tutorial-how-to-start-zone-less-angular-app-ff19107290bf)
- [Ability to pass BootstrapOptions in standalone applications](https://github.com/angular/angular/issues/47538)
- [When to use ngZone.run()](https://stackoverflow.com/questions/51455545/when-to-use-ngzone-run)
- [NgZone docs](https://angular.io/api/core/NgZone)
- [ChangeDetectorRef](https://angular.io/api/core/ChangeDetectorRef)
- [Zoneless breaks material component](https://github.com/angular/components/issues/28575)

#### Overview

This challenge will test the following skills:

- Browser familiarity
- Angular proficiency

Allow at least 3 hours to complete

Do not be discouraged if you are unable to complete aspects of the challenge, it is designed to test all levels of ability

#### Rules

- Complete the test(s) on your own
- Referencing of online resources is expected, you should comment with a reference when you do
- All code should be pushed to the provided repository
- You are encouraged to ask us questions at any point
- Note any deviations from the specification
- You may use any supporting library you deem appropriate

#### Instructions

1.  Create a new Angular CLI project
2.  Make 2 new components 

- **Component A**
  - Retrieve data from the backend app you made in the prior task
  - Should have an input box to enter a node path
  - On each keypress the component should query the backend for a subtree matching that path. Inflight requests should be canceled for new ones
  - Use Component B to render the returned subtree
- **Component B**
  - Should render a single node tree and all properties
  - The label of a property should be GREEN if the value is greater than 10

3.  Use Angular Material for the following

- Use the Dialog component to make a reusable "Confirm" box
- Use the above component to make a delete button with confirmation for each node (this does not need to be connected to the backend)

4.  Create a Pipe

- This pipe should render how long ago it was since this item was created (e.g _'created 1 hour ago'_)
- Implement this pipe onto each item in the displayed tree

5.  Create a unit test to assert that the colour of the Component B label behaves as specified

### Bonus

6.  Remove zone.js and instead use NoopZone
