describe('Bookmark app', function () {
  beforeEach(function () {
    cy.visit('')
  })

  it('renders app', function () {
    cy.contains(/bookmark app/i)
    cy.contains(/no bookmarks/i)
  })

  it('creates a bookmarks if url is valid', function () {
    cy.get('input').type('https://github.com')
    cy.contains('save').click()
    cy.contains('https://github.com')
    cy.get('#bookmark-list').should('have.length', 1)
  })

  it('rejects a bookmarks if url is invalid', function () {
    cy.get('input').type('abcdef')
    cy.contains('save').click()
    cy.contains('abcdef').should('not.exist')
  })

  it('rejects a bookmarks if url does not exist', function () {
    cy.get('input').type('https://wwwwwwww.com')
    cy.contains('save').click()
    cy.contains('https://wwwwwwww.com').should('not.exist')
  })

  it('deletes a bookmark', function () {
    cy.get('input').type('https://github.com')
    cy.contains('save').click()
    cy.contains('delete').click()
    cy.get('#bookmark-list').should('have.length', 0)
  })

  it('deletes all bookmarks', function () {
    cy.get('input').type('https://github.com')
    cy.contains('save').click()
    cy.contains('https://github.com')
    cy.get('input').type('https://google.com')
    cy.contains('save').click()
    cy.contains('https://google.com')
    cy.contains('clear all').click()
    cy.get('#bookmark-list').should('have.length', 0)
  })
})
