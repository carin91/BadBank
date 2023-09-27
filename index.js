const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
// create context
const UserContext = React.createContext(null);

function Spa() {
  return (
    <HashRouter>
     <div className="container" style={{padding: "20px"}}>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'camilo',email:'ca.rincon97@gmail.com',password:'secret',balance:100}]}}>*
        
        
         <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
             
          </UserContext.Provider> 
      </div>           
       
        
    </HashRouter>
      );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
