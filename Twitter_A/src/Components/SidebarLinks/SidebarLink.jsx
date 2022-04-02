import "./SidebarLink.css"

export const SidebarLink = ({active, text, Icon}) => {
  return (
    <>
      <div className={`sidebarLink ${active && 'sidebarLink--active'}`}>
        <Icon/>
        <p>{text}</p>
      </div>
    </>
    
  )
}
