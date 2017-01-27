import React from 'react';

const LanguageSearchForm = () => (
  <form>
    <div className="form-group">
      <label htmlFor="languageInput">Language lookup</label>
      <input
        type="email" className="form-control" id="languageInput"
        aria-describedby="languageSearchHelp"
        placeholder="Search for a language (or a vocabulary word)"
      />
      <small id="languageSearchHelp" className="form-text text-muted">
        We don't share your data with anyone else.
      </small>
    </div>
  </form>
);

export default LanguageSearchForm;
