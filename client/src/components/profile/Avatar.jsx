const Avatar = ({ src, size = 30 }) => {
  return ( 
    <img 
      className="rounded-full aspect-square object-cover" 
      height={size}
      width={size}
      alt="Avatar" 
      src={src || '/images/placeholder.jpg'}
    />
   );
}
 
export default Avatar;