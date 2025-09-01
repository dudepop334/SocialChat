# moderation.py
def moderate(text):
    return "Clean" if "badword" not in text else "Flagged"

if __name__ == "__main__":
    import sys
    text = sys.stdin.read()
    print(moderate(text))
