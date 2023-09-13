import { initPlasmicLoader } from "@plasmicapp/loader-react"
export const PLASMIC = initPlasmicLoader({
    projects: [
        {
            id: "aAqcsM5WDH5ZNkEHvWKPLD", // ID of a project you are using
            token: "YSJ8sESCWaIkTeOKany36I2AwFCUDWW75AXnhPi9xCCy8ZIcWxUlf1RUymuYzD8ALhkku3c62tRwH46zMueg" // API token for that project
        }
    ],
    // Fetches the latest revisions, whether or not they were unpublished!
    // Disable for production to ensure you render only published changes.
    preview: true
})
