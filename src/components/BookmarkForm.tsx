import { useState } from 'react'
import { useStateValue } from '../state'
import { Bookmark } from '../types'
import { isValidUrl, isExistingURL } from '../utils'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-mui'
import { Grid, Button, Typography } from '@mui/material'

interface Values {
  url: string
}

const BookmarkForm = () => {
  const [{ bookmarks }, dispatch] = useStateValue()
  const [saveError, setSaveError] = useState<boolean>(false)

  const handleError = () => {
    setSaveError(true)
    setTimeout(() => {
      setSaveError(false)
    }, 5000)
  }

  return (
    <Formik
      initialValues={{
        url: '',
      }}
      validate={(values) => {
        const errors: Partial<Values> = {}

        if (!values.url) {
          errors.url = 'Url is required'
        } else if (
          Object.values(bookmarks).find(
            (bookmark) => bookmark.url === values.url
          )
        ) {
          errors.url = 'This url is already in bookmarks'
        } else if (!isValidUrl(values.url)) {
          errors.url = 'Invalid url. Try https://example.com'
        }

        return errors
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          // prevent non-existing url from being added
          const newBookmark: Bookmark | false = await isExistingURL(values.url)

          if (newBookmark) {
            // update app state and save new bookmark to localSorage
            dispatch({ type: 'ADD_BOOKMARK', payload: newBookmark })
            localStorage.setItem(newBookmark.id, JSON.stringify(newBookmark))

            resetForm()
          } else {
            handleError()
          }
        } catch (error) {
          handleError()
        }

        setSubmitting(false)
      }}
    >
      {({ submitForm, values, isSubmitting }) => (
        <Grid container component={Form} alignItems="flex-start">
          <Field
            component={TextField}
            required
            name="url"
            type="url"
            label="Add Bookmark Url"
            sx={{ flexGrow: 1 }}
          />
          <Button
            id="save-button"
            variant="contained"
            type="submit"
            onClick={submitForm}
            disabled={!values.url || isSubmitting}
            sx={{ ml: 1, py: 2 }}
          >
            save
          </Button>
          {saveError && (
            <Grid
              item
              sm={12}
              component={Typography}
              sx={{ pl: '.8rem', color: 'secondary.dark', fontSize: 13 }}
            >
              This url does not exist
            </Grid>
          )}
        </Grid>
      )}
    </Formik>
  )
}

export default BookmarkForm
