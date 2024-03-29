/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as NotesIndexImport } from './routes/notes/index'
import { Route as NotesAddImport } from './routes/notes/add'
import { Route as NotesNoteidImport } from './routes/notes/$noteid'
import { Route as NotesNoteidEditImport } from './routes/notes/$noteid.edit'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const NotesIndexRoute = NotesIndexImport.update({
  path: '/notes/',
  getParentRoute: () => rootRoute,
} as any)

const NotesAddRoute = NotesAddImport.update({
  path: '/notes/add',
  getParentRoute: () => rootRoute,
} as any)

const NotesNoteidRoute = NotesNoteidImport.update({
  path: '/notes/$noteid',
  getParentRoute: () => rootRoute,
} as any)

const NotesNoteidEditRoute = NotesNoteidEditImport.update({
  path: '/edit',
  getParentRoute: () => NotesNoteidRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/notes/$noteid': {
      preLoaderRoute: typeof NotesNoteidImport
      parentRoute: typeof rootRoute
    }
    '/notes/add': {
      preLoaderRoute: typeof NotesAddImport
      parentRoute: typeof rootRoute
    }
    '/notes/': {
      preLoaderRoute: typeof NotesIndexImport
      parentRoute: typeof rootRoute
    }
    '/notes/$noteid/edit': {
      preLoaderRoute: typeof NotesNoteidEditImport
      parentRoute: typeof NotesNoteidImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  NotesNoteidRoute.addChildren([NotesNoteidEditRoute]),
  NotesAddRoute,
  NotesIndexRoute,
])

/* prettier-ignore-end */
