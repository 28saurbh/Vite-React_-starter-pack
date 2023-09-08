# React-Hot-Toast  
Link - https://react-hot-toast.com/docs/toast

toast.success('Successfully created!')
toast.error('Successfully created!');
toast.custom(<div>Hello World</div>);
toast.loading('Waiting...');
{
    //this is using for loading with toast
    const toastId = toast.loading('Loading...');
    toast.dismiss(toastId);
}

# React Icons

npm link- https://www.npmjs.com/package/react-icons
search icons - https://react-icons.github.io/react-icons/

# Tailwind css

link:- https://tailwindcss.com/docs/guides/vite

# Dot env

{
    //crete .env file rules se VITE_APP in front of your variable
    
    VITE_APP_API_URL=https://api.example.com
    VITE_APP_API_KEY="YOUR_API_KEY"

    // how to access

    const apiUrl = import.meta.env.VITE_APP_API_URL;
	const apiKey = import.meta.env.VITE_APP_API_KEY;

	console.log(apiUrl); // Outputs: https://api.example.com
	console.log(apiKey); // Outputs: YOUR_API_KEY
}


# React-Redux-Toolkit 

docs link :- https://redux-toolkit.js.org/tutorials/quick-start

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
#   V i t e - R e a c t _ - s t a r t e r - p a c k  
 