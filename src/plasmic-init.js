import { initPlasmicLoader } from "@plasmicapp/loader-react"
export const PLASMIC = initPlasmicLoader({
    projects: [
        {
            id: "rZ9NQQMdzYQadvG8kT3Sf4", // ID of a project you are using
            token: "sw838KpSRzgWbfUxf8mRsCgY5KEgpbj8JnANXquJpxxxRIsF2QN3hpZwEmHI0CqBe7tzyBAhLVg2xexCKJw" // API token for that project
        }
    ],
    // Fetches the latest revisions, whether or not they were unpublished!
    // Disable for production to ensure you render only published changes.
    preview: true
})
