// src/components/ScrollableComponent.js

function ScrollableComponent() {
    // Simulate a long content by repeating a string
    const content = Array.from({ length: 100 }, (_, i) => `Line ${i + 1}`).join('\n');
  
    return (
      <div className="ScrollableContent">
        {content}
      </div>
    );
  }
  
  export default ScrollableComponent;