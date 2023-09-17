import { initPlasmicLoader } from "@plasmicapp/loader-react"
export const PLASMIC = initPlasmicLoader({
    projects: [
        {
            id: "cqWaiVXZokkoNMMqwck74u", // ID of a project you are using
            token: "q0cn3DWoGUuwwbEs7sa5ATL4ZFLG5ZVPRJCdoWbcLsgBxjJjlFg6y4o9sQMya8qp706BrLImRMMZcJWQDrA" // API token for that project
        }
    ],
    // Fetches the latest revisions, whether or not they were unpublished!
    // Disable for production to ensure you render only published changes.
    preview: true
})
