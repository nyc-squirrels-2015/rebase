SnippetFiles = new FS.Collection("snippet_files",{
  stores: [new FS.Store.FileSystem("snippet_files",{path:"~/uploads"})]
});