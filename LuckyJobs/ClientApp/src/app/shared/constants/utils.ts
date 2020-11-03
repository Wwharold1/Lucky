export function __messageSnackBar(snackBar, message: any, duration?: number): void {
    if (typeof (duration) == 'undefined') duration = 5000;
    snackBar.open(message, 'Cerrar', {
        duration: duration,
    });
}
