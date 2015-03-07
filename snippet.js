var Snippets = new FS.Collection("snippets",{
  stores: [new FS.Store.FileSystem("snippets",{path:"~/uploads"})]
});