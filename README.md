# QuantUI - Minimalistic CSS-Only Component Library for React

QuantUI is a lightweight, CSS-only component library designed for modern React applications. It provides a set of pre-styled, fully customizable UI components that help you build elegant interfaces with minimal effort.

### ⚠️ Note: This library is designed specifically for React projects. The components are built using React and will not work in plain HTML or other frameworks.

## ✨ Features

- ✅ React-Only Components – Built specifically for React applications.
- ✅ CSS-Only – No extra JavaScript, just pure CSS for fast performance.
- ✅ Minimalistic & Customizable – Simple styling that you can easily extend.
- ✅ Optimized for Vite – Works seamlessly with Vite and modern React setups.
- ✅ Install Only What You Need – Use QuantUI CLI to install individual components.

## 📦 Installation & Usage

### 1️⃣ Create a React + Vite Project

If you don’t have a React project yet, set one up using Vite:

```bash
npm create vite@latest my-app --template react
cd my-app
npm install
```

### 2️⃣ Install QuantUI CLI

To install the QuantUI CLI run:

```bash
npm i quant-ui-cli
```

Now, you can use the CLI to install components.

### 3️⃣ Install QuantUI Components via CLI

To install a specific component (e.g., button), use QuantUI CLI:

```bash
npx quant add button
```

This will copy the Button component into your project’s components/ui directory.

### List Available Components

To view a list of available components, you can run:

```bash
npx quant list
```

### Remove Specific Component

This will remove the component you specify (e.g., button) from your project’s components/ui directory.

```bash
npx quant remove button
```

### Usage

Once the components are installed, you can use them in your React or HTML-based projects. Here’s how to use the Button component:

```bash
import { Button } from '@/components/ui/button';

const App = () => (
  <div>
    <Button variant="primary" size="large" onClick={() => alert('Clicked!')}>
      Primary Button
    </Button>
  </div>
);
```

## 🎨 Styling

QuantUI components come with minimal default styles. You can customize them by modifying the generated CSS files inside src/components/ui.

### For example, button.css:

```bash
.button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}
```

## 🔗 Contributing

We welcome contributions! If you'd like to add new components or improve the code, feel free to fork the repo and submit a pull request.

## 📜 License

QuantUI is open-source and licensed under the MIT License.
