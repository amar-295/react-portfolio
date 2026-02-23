import sys

filepath = "src/components/ContactForm.jsx"
with open(filepath, "r") as f:
    content = f.read()

# Change 1: Add state initialization for mountTime
search1 = """    const [errors, setErrors] = useState({});

    const validateForm = (formData) => {"""
replace1 = """    const [errors, setErrors] = useState({});

    // Track mount time for spam protection
    const [mountTime] = useState(() => Date.now());

    const validateForm = (formData) => {"""

# Change 2: Add checks in handleLocalSubmit
search2 = """    const handleLocalSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        if (!validateForm(formData)) {
            return;
        }"""
replace2 = """    const handleLocalSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        // Security check: Honeypot field
        const honeypot = formData.get("_gotcha")?.toString();
        if (honeypot) {
            // Silently fail if honeypot is filled
            setStatus({ submitting: false, succeeded: true, errors: [] });
            return;
        }

        // Security check: Time-based submission (minimum 2 seconds)
        // If the form is submitted too quickly, it's likely a bot
        if (Date.now() - mountTime < 2000) {
            // Silently fail
            setStatus({ submitting: false, succeeded: true, errors: [] });
            return;
        }

        if (!validateForm(formData)) {
            return;
        }"""

# Change 3: Add hidden input in JSX
search3 = """            <form onSubmit={handleLocalSubmit} className="space-y-6" noValidate>
                {status.errors.length > 0 && ("""
replace3 = """            <form onSubmit={handleLocalSubmit} className="space-y-6" noValidate>
                {/* Honeypot field for spam protection */}
                <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
                    <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />
                </div>

                {status.errors.length > 0 && ("""

# Apply changes
new_content = content.replace(search1, replace1).replace(search2, replace2).replace(search3, replace3)

if new_content == content:
    print("Error: Search string not found.")
    # Debug
    if search1 not in content: print("Search 1 failed")
    if search2 not in content: print("Search 2 failed")
    if search3 not in content: print("Search 3 failed")
    sys.exit(1)

with open(filepath, "w") as f:
    f.write(new_content)

print("Successfully updated file.")
