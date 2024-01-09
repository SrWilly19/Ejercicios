import { useState } from "react"

export function Container ({title, children}){
    const [collapsed, setCollapsed] = useState(false)

    function handleToggleCollapse(){
        setCollapsed((prevCollapsed) => !prevCollapsed)
    }
    
    return (
        <div className="app">
            <div onClick={handleToggleCollapse} className="app-title">
                {title}
            </div>
            <div className={`app-content ${collapsed ? 'app-content-hidden' : ''}` }>{children}</div>
        </div>
    )
}