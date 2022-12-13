// const Membre = (props) => {
//     return ( 
//         <>
//             <h2>Membre: {props.nom.toUpperCase()} - {props.age} ans</h2>
//             {props.children ? <p>{props.children}</p> : null}
//         </>
//      );
// }
 
// export default Membre;

const Membre = ({nom, children, age}) => {
    return ( 
        <>
            <h2
                style={{backgroundColor: age < 35 ? 'dodgerblue':'crimson', color: 'white'}}
            >Membre: {nom.toUpperCase()} - {age} ans</h2>
            {children ? <h1>{children}</h1> : null}
        </>
     );
}
 
export default Membre;