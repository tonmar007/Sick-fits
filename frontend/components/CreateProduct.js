import { useState } from 'react';

export default function CreateProduct() {
  const [name, setName] = useState('Marko');
  return (
    <div>
      <form>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              console.log(e.target.value);
              setName(e.target.value);
            }}
          />
        </label>
      </form>
    </div>
  );
}
