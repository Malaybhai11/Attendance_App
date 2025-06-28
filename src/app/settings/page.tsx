import { Button } from "@/components/ui/button";

export default function SettingsPage(){
    return (
        <div className="Header">
        <h1 className="Head">Settings</h1>
        <p className="text-gray-600">This is the settings page.</p>
        <p className="text-gray-600">You can customize your preferences here.</p>

        {/* const settings =  [
            { name: "Profile", href: "/profile" },
            { name: "Notifications", href: "/notifications" },
            { name: "Privacy", href: "/privacy" },
            { name: "Security", href: "/security" },
            { name: "Language", href: "/language" },
            { name: "Theme", href: "/theme" }
        ] */}
        
        <Button>login</Button>
        <Button>Signup</Button>

        </div>

    );

}