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
            <h2>Membre: {nom.toUpperCase()} - {age} ans</h2>
            {children ? <h1>{children}</h1> : null}
        </>
     );
}
 
export default Membre;