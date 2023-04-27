# Components Tree

App
  - items state here
  - dark mode state here
  - dark mode handler here
  - items array handler here (adds item from submit event listener to items state)

  -> Header (passed in dark mode state, dark mode handler)
    - dark mode onClick event listener

  -> ShoppingList (passed in items state, items array handler)
    - category state here
    - search state here
    - category handler here
    - item.filter method here (for category and search updates!)
    - item.map method here (for items rendering)

    -> ItemForm (passed in items array handler)
      - form state here
      - form handler here
    -> Filter (passed in search state, search setter function, category handler)
      - search handler here (updates search setter function)
    -> Item (pass in items destructured; key, name, category)
      - in cart state here
      - in cart handler here
