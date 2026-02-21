---
name: azure-static-app-deployment
description: This skill should be used when the user asks to "deploy", "re-deploy", "publish", or "push to Azure" a static web app hosted on Azure Static Web Apps. Covers building the project and deploying via the Azure Static Web Apps CLI.
version: 1.0.0
---

# Azure Static Web App Deployment

Deploy a Vite/React static site to Azure Static Web Apps using the Azure CLI and SWA CLI.

## Prerequisites

- Azure CLI installed and logged in (`az login`)
- Node.js and npm available
- Project uses `npm run build` with output to `dist/`

## Deployment Workflow

### 1. Identify the Azure Static Web App

```bash
az staticwebapp list --query "[].{name:name, resourceGroup:resourceGroup, defaultHostname:defaultHostname}" -o table
```

Look for the app matching the project and note its name and default hostname.

### 2. Build the project

```bash
npm install
npm run build
```

Output will be in the `dist/` directory.

### 3. Get the deployment token

```bash
az staticwebapp secrets list --name <app-name> --query "properties.apiKey" -o tsv
```

### 4. Deploy using SWA CLI

```bash
npx @azure/static-web-apps-cli@latest deploy ./dist \
  --deployment-token "<token-from-step-3>" \
  --env "production"
```

The CLI will download `StaticSitesClient` on first run and upload the built assets.

## Notes

- The GitHub Actions workflow (`.github/workflows/*.yml`) handles CI/CD on push to `main`, but manual deployment via SWA CLI is useful for worktrees or branches outside the CI pipeline.
- The deployment token should be stored in GitHub Secrets and never committed to the repository.
