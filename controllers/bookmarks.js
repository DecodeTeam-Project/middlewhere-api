const express = require('express');

const onlyLoggedIn = require('../lib/only-logged-in');

module.exports = (dataLoader) => {
  const bookmarksController = express.Router();


<<<<<<< HEAD
  // Modify a bookmark //
  bookmarksController.patch('/:id', onlyLoggedIn, (req, res) => {
    // TODO: this is up to you to implement :)
    // PATCH makes an update on bookmarks
    // dataLoade;
    res.status(500).json({ error: 'not implemented' });


  // Modify a bookmark //          .onlyLoggedIn,
  bookmarksController.patch('/:id', (req, res) => {
    // TODO: this is up to you to implement :)
    // console.log(onlyLoggedIn);
    return dataLoader.boardBelongsToUser(req.params.id, req.user.id)
    .then(() => dataLoader.updateBookmark(1, {boardId:3, title:'Gee Biz', URL:'react.oil'}))
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: 'not implemented' }));
    // TODO: make sure to verify user

=======
  // Modify a bookmark
  bookmarksController.patch('/:id', onlyLoggedIn, (req, res) => {
    // TODO: this is up to you to implement :)
    // TODO: make sure to verify user

      // ** MOCK DATA *******************
      const mock_user = 1;
      const mock_data = {
        title: "how to run quickly -- ger -- er",
        boardId : 1,
        url:"bolt.com" // req.body ...
      } // ******************************
      const real_data = {
        title: req.body.title,
        boardId : req.body.boardId,
        url: req.body.url
      }
      const real_user = req.user.users_id;

      dataLoader.bookmarkBelongsToUser(req.params.id, mock_user)
      .then(() => dataLoader.updateBookmark(req.params.id, mock_data))
      .then(data => {
        console.log(data);
      return res.json(data)})
      .catch(err => res.status(400).json(err));
>>>>>>> bookmarks
  });
  // Retrieve a list of boards
  // boardsController.get('/', (req, res) => {
  //   dataLoader.getAllBoards({
  //     page: req.query.page,
  //     limit: req.query.count
  //   })
  //   .then(data => res.json(data))
  //   .catch(err => res.status(400).json(err));
  // });





  // Delete a bookmark
  bookmarksController.delete('/:id', onlyLoggedIn, (req, res) => {
    // TODO: this is up to you to implement :)

    const real_user = req.user.users_id; //
    const bookmark_id = req.params.id;

    dataLoader.bookmarkBelongsToUser(bookmark_id, real_user)
    .then(() => {
      return dataLoader.deleteBookmark(bookmark_id);
    })
    .then(() => res.status(204).end())
    .catch(err => res.status(400).json(err));
  });

  return bookmarksController;
};
