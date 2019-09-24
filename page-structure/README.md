# Structuring a page of content

You will structure a page of content to test your ability to think about how a page might end up looking, and choose appropriate structural semantics to build a layout on top of.

## How to download the starter files to your laptop

To get the starter files on your laptop, open your terminal and navigate to the `repos` folder:

```
cd ~/repos
```

Once in the `repos` folder, create a new folder called `page-structure-assessment` by running the following command:

```
mkdir page-structure-assessment
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

Next, while you are in the `iwbp` folder, you need to copy the starter files for the assessment from the `iwbp` folder into your `page-structure-assessment` folder by running the following command:

```
cp -r page-structure/* ../page-structure-assessment
```

Now navigate to the `page-structure-assessment` folder using the following command:

```
cd ../page-structure-assessment
```

Login into your Github account and create a new public repository called `page-structure-assessment`. Copy the link to your repository to the clipboard. It should look like this: `https://github.com/YOUR_GITHUB_USERNAME/page-structure-assessment.git`.

Back on the terminal, ensure you are in the `~/repos/page-structure-assessment` folder and run the following commands to convert your folder into a Git repository, commit the initial starter files and push them to Github:

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

You are provided with two files and one folder:

-   `index.html` - The HTML you need to add structural markup to.
-   `style.css` - CSS to style your markup.
-   `images` - Folder containing images that are used on the page.

### NOTE:

-   You don't need to know any CSS to do this assessment; you just need to put the provided CSS inside an HTML element.
-   The provided CSS is designed so that when the correct structural elements are added to the markup, they will appear green in the rendered page.
-   If you are getting stuck and can't figure out what elements to put where, it often helps to draw out a simple block diagram of the page layout, and write on the elements you think should wrap each block.

## Instructions

For this project, your task is to take the content for the homepage of a bird watching website and add structural elements to it so it can have a page layout applied to it. It needs to have:

-   A header spanning the full width of the site containing the main title for the page, the site logo, and the navigation menu. The title and logo appear side by side once styling is applied, and the navigation appears below those two items.
-   A main content area containing two columns — a main block to contain the welcome text, and a sidebar to contain image thumbnails.
-   A footer containing copyright information and credits.

You need to add a suitable wrapper for:

-   The header
-   The navigation menu
-   The main content
-   The welcome text
-   The image sidebar
-   The footer

You should also:

-   Apply the provided CSS to the page by adding another `<link>` element just below the existing one provided at the start.

## Example

The following screenshot shows an example of what the homepage might look like after being marked up.

![Homepage](homepage.png)
