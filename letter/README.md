# Marking up a letter

You will markup a letter to test your HTML text formatting skills.

## How to download the starter files to your laptop

To get the starter files on your laptop, open your terminal and navigate to the `repos` folder:

```
cd ~/repos
```

Once in the `repos` folder, create a new folder called `letter-assessment` by running the following command:

```
mkdir letter-assessment
```

While still in the `repos` folder, clone the instructions from the [`antosan/iwbp`](https://github.com/antosan/iwbp) repository on Github by running the following command:

```
git clone https://github.com/antosan/iwbp.git
```

Then navigate into the `iwbp` folder using the following command:

```
cd iwbp
```

NOTE: If you had already cloned the `antosan/iwbp` repo before, navigate into the `iwbp` folder using the following command:

```
cd iwbp
```

And update the folder by running the following command:

```
git pull
```

Next, while you are in the `iwbp` folder, you need to copy the starter files for the assessment from the `iwbp` folder into your `letter-assessment` folder by running the following command:

```
cp letter/* ../letter-assessment
```

Now navigate to the `letter-assessment` folder using the following command:

```
cd ../letter-assessment
```

Login into your Github account and create a new public repository called `letter-assessment`. Copy the link to your repository to the clipboard. It should look like this: `https://github.com/YOUR_GITHUB_USERNAME/letter-assessment.git`.

Back on the terminal, ensure you are in the `~/repos/letter-assessment` folder and run the following commands to convert your folder into a Git repository, commit the initial starter files and push them to Github:

```
git init
```

Followed by:

```
git add .
```

Then:

```
git commit -m "Initial commit"
```

And then:

```
git remote add origin PASTE_HERE_THE_LINK_ON_YOUR_CLIPBOARD
```

Finally, run:

```
git push -u origin master
```

Confirm that the initial files are present on your Github repository.

Now you are ready to begin the assessment. Remember to commit and push your work after you finish working on each task.

## Starting point

You are provided with two files: `text.txt` that contains the raw text that needs to be marked up and `css.txt` that contains the CSS you need to include in your HTML.

You are required to create a new `index.html` file using your text editor to do your work in.

NOTE: You don't need to know any CSS at this moment; you just need to put the provided CSS inside an HTML element.

## Instructions

For this project, your task is to mark up a letter that needs to be hosted on a university intranet. The letter is a response from a research fellow to a prospective PhD student concerning their application to the university.

### Block/structural semantics:

-   You should structure the overall document with an appropriate structure including doctype, and `<html>`, `<head>` and `<body>` elements.
-   The letter in general should be marked up with a structure of paragraphs and headings, with the exception of the below points. There is one top level heading (the "Re:" line) and three second level headings.
-   The semester start dates, study subjects and exotic dances should be marked up using an appropriate list type.
-   The two addresses should be put inside `<address>` elements. Each line of the address should sit on a new line, but not be in a new paragraph.

### Inline semantics:

-   The names of the sender and receiver (and "Tel" and "Email") should be marked up with strong importance.
-   The four dates in the document should be given appropriate elements containing machine-readable dates.
-   The first address and first date in the letter should be given a class attribute value of "sender-column"; the CSS you'll add later will then cause these to be right aligned, as should be the case in a classic letter layout.
-   The five acronyms/abbreviations in the main text of the letter should be marked up to provide expansions of each acronym/abbreviation.
-   The six sub/superscripts should be marked up appropriately — in the chemical formulae, and the numbers 103 and 104 (they should be 10 to the power or 3 and 4, respectively).
-   Try to mark up at least two appropriate words in the text with strong importance/emphasis.
-   There are two places where a hyperlink should be added; add appropriate links with titles. For the location that the links point to, just use http://example.com.
-   The university motto quote and citation should be marked up with appropriate elements.

### The head of the document:

-   The character set of the document should be specified as utf-8 using an appropriate meta tag.
-   The author of the letter should be specified in an appropriate meta tag.
-   The provided CSS should be included inside an appropriate tag.

## Example

The following screenshot shows an example of what the letter might look like after being marked up.

![Letter](letter.png)
