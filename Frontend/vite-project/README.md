# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


/* const {isAuthonticated,setIsAuthonaticated,setUser}=useContext(Context);
     useEffect(()=>{
      const fetch=async()=>{
        try {
           const response=  await axios.get(
              "http://localhost:4000/api/v1/patient/me",
              {withCredentials:true} )
              setIsAuthonaticated(true);
               setUser(response.data.user);
            
        } catch (error) {
           toast.error(error.response.data.message)
           setUser({});
        }

      }
      fetch();
     },[isAuthonticated]);*/