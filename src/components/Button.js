import ButtonSvg from "../assets/svg/ButtonSvg"

const Button = ({className, href, onClick, children, px, white}) => {
    const classes = `button 
    relative 
    inline-flex 
    items-center 
    justify-center 
    h-11 
    transition-colors 
    hover:text-color-1 
    ${px || "px-7"}  
    ${white ? "text-n-8": "text-1"} 
    ${className || ""}`;

    /* conditionals ${...} explanations :

    ${px || "px-7"} means if px value is not specified the px-7 is the failover 
    ${white ? 'text-n-8': "text-1"} means if white value is true/specified then format "text-n-8" else format "text-1" 
    ${className || ""} means if className value is not specified the "" is the failover 

    */

    const spanClasses = "relative z-10";

    const renderButton = () => (
        <button className={classes} onClick={onClick}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </button>
    );

    const renderLink = () => (
        <a href={href} className={classes}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </a>
    )
    return href ? renderLink() : renderButton(); //conditional return depending on whether the href prop is present
};

export default Button