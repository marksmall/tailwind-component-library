// import './App.css';
import { Button } from '@mark-small/tailwind-component-library';
import '@mark-small/tailwind-component-library/dist/style.css';

function App() {
  return (
    <>
      <h1>Library components</h1>

      <div>
        <h2>Buttons</h2>

        <div>
          <h3 className="text-3xl">Sizes</h3>

          <Button size="small" onClick={() => console.log('Button Clicked')}>
            Small button
          </Button>
          <Button size="medium" onClick={() => console.log('Button Clicked')}>
            Medium button
          </Button>
          <Button size="large" onClick={() => console.log('Button Clicked')}>
            Large button
          </Button>
        </div>

        <div>
          <h3>Variants</h3>

          <Button variant="primary" onClick={() => console.log('Button Clicked')}>
            <span>Primary button</span>
          </Button>
          <Button variant="secondary" onClick={() => console.log('Button Clicked')}>
            Secondary button
          </Button>
        </div>

        <div>
          <h3>Rounded</h3>

          <Button rounded="none" onClick={() => console.log('Button Clicked')}>
            <span>Rounded button</span>
          </Button>
          <Button rounded="sm" onClick={() => console.log('Button Clicked')}>
            <span>Rounded button</span>
          </Button>
          <Button rounded="md" onClick={() => console.log('Button Clicked')}>
            <span>Rounded button</span>
          </Button>
          <Button rounded="lg" onClick={() => console.log('Button Clicked')}>
            <span>Rounded button</span>
          </Button>
          <Button rounded="full" onClick={() => console.log('Button Clicked')}>
            <span>Rounded button</span>
          </Button>
        </div>

        <div>
          <h3>Custom Colour</h3>

          <Button bgColor="#ffc0cb" onClick={() => console.log('Button Clicked')}>
            <span className="text-blue-400">Custom button</span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
